import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  Connection,
  Transaction,
  clusterApiUrl,
  SystemProgram,
} from '@solana/web3.js';
import { web3 } from '@project-serum/anchor';

import avatarM from '../img/avatarM.jpg';

// Set our network to devnet
const NETWORK = clusterApiUrl('devnet');

// Control's how we want to acknowledge when a transaction is "done"
const opts = {
  preflightCommitment: 'processed',
};

function Navigation() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [logs, setLogs] = useState([]);
  const [tipValue, setTipValue] = useState(0.05);
  const addLog = useCallback(
    (log) => setLogs((logs) => [...logs, '> ' + log]),
    []
  );

  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /*
   * When our component first mounts, let's check to see if we have a connected
   * Phantom Wallet
   */
  useEffect(() => {
    window.addEventListener('load', async () => {
      await checkIfWalletIsConnected();
    });
  }, []);

  // to check if the Phantom wallet is connected or not
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found');
        }

        // The solana object gives us a function that will allow us to connect directly with the user's wallet
        const response = await solana.connect({ onlyIfTrusted: true });
        console.log(
          'Connected with Public key:',
          response?.publickKey?.toString()
        );

        //set the user's publickey in the state to be used later
        setWalletAddress(response?.publicKey?.toString());
      } else {
        alert(
          'Solana wallet not found! Get a Phantom Wallet here https://phantom.app/ '
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      // console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  const getProvider = () => {
    if ('solana' in window) {
      const anyWindow = window;
      const provider = anyWindow.solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
    // const connection = new Connection(NETWORK, opts.preflightCommitment);
    // const provider = new Provider(
    //   connection,
    //   window.solana,
    //   opts.preflightCommitment
    // );

    // return provider;
  };
  const provider = getProvider();
  const connection = new Connection(NETWORK, opts.preflightCommitment);

  const createTransferTransaction = async () => {
    if (!provider.publicKey) return;
    let transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: provider.publicKey,
        toPubkey: 'GmXArdmUjTFoRwJtwK5KsYg4k785U4K9enVHhQerBA79',
        lamports: web3.LAMPORTS_PER_SOL * tipValue,
      })
    );
    transaction.feePayer = provider.publicKey;
    addLog('Getting recent blockhash');
    const anyTransaction = transaction;
    anyTransaction.recentBlockhash = (
      await connection.getRecentBlockhash()
    ).blockhash;
    return transaction;
  };

  const sendTransaction = async () => {
    try {
      const transaction = await createTransferTransaction();
      if (!transaction) return;
      let signed = await provider.signTransaction(transaction);
      addLog('Got signature, submitting transaction');
      let signature = await connection.sendRawTransaction(signed.serialize());
      addLog('Submitted transaction ' + signature + ', awaiting confirmation');
      await connection.confirmTransaction(signature);
      addLog('Transaction ' + signature + ' confirmed');
    } catch (err) {
      console.warn(err);
      addLog('[error] sendTransaction: ' + JSON.stringify(err));
    }
  };

  return (
    <NavigationStyled>
      <div className="avatar">
        {/* image to be 500X500 to have round frame */}
        <img src={avatarM} alt="avatar" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" exact activeClassName="active-class">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" exact activeClassName="active-class">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" exact activeClassName="active-class">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" exact activeClassName="active-class">
            Portfolios
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/blogs" exact activeClassName="active-class">
            Blogs
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink to="/contact" exact activeClassName="active-class">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="nav-items">
        <form onSubmit={handleSubmit}>
          <label>If you like my work, please consider sending me a tip=)</label>
          <StyledInput
            value={tipValue}
            onChange={(e) => setTipValue(e.target.value)}
          />
          <strong>
            <span>SOL</span>
          </strong>
          {walletAddress ? (
            <StyledButton onClick={sendTransaction}>Tip</StyledButton>
          ) : (
            <StyledButton onClick={connectWallet}>Connect</StyledButton>
          )}
        </form>
      </div>
      <footer className="footer">
        <p>
          <span>&copy;</span> <span>{currentYear}</span> Sai Kiran Sabavath
        </p>
      </footer>
    </NavigationStyled>
  );
}

const StyledInput = styled.input`
  outline: none;
  width: 64%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 26px;
  border: 1px solid var(--border-color);
  outline: none;
  background: transparent;
  height: 36px;
  padding: 0 15px;
  /* width: 100%; */
  color: inherit;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: var(--primary-color);
  padding: 0.3rem 1.8rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  margin-right: 0.5rem;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;

    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
      color: var(--white-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        transition: all 0.4s ease-in-out;
        z-index: 10;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          z-index: -1;
          opacity: 0.21;
        }
      }
      /* highlight effect on hover */
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
