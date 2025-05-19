# EERC Deploy CLI

A command-line interface tool for deploying EncryptedERC tokens on Ethereum networks.

## Installation

```bash
npm install -g eerc-deploy-cli
```

## Features

- Initialize configuration for EncryptedERC token deployment
- Deploy EncryptedERC tokens and required contracts
- Secure private key management with encryption support
- Configurable deployment options
- Detailed deployment progress tracking
- Gas estimation support

## Commands

### Initialize Configuration

```bash
eerc-deploy init
```

This command helps you set up the initial configuration for your EncryptedERC token deployment. It will create a `eerc.config.json` file with the necessary settings.

### Deploy Token

```bash
eerc-deploy deploy [options]
```

Deploys the EncryptedERC token and all required contracts to the specified network.

#### Options

- `--private-key <key>`: Raw private key for deployment
- `--encrypted-key <key>`: Encrypted private key
- `--passphrase <phrase>`: Passphrase for encrypted key
- `--config <path>`: Path to config file (default: eerc.config.json)
- `--output <path>`: Path to save deployment results (default: deployment.json)
- `--verbose`: Show detailed deployment progress
- `--dry-run`: Estimate gas without deploying

### Encrypt Private Key

```bash
eerc-deploy encrypt-key
```

Generates an encrypted private key from a raw private key for secure storage.

## Configuration

The tool uses a configuration file (`eerc.config.json`) to store deployment settings. You can create this file using the `init` command or manually.

## Security

- Private keys can be provided either in raw form or encrypted
- Encrypted keys require a passphrase for decryption
- Never share your private keys or passphrases
- Consider using encrypted keys for production deployments

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```

### Available Scripts

- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run the compiled JavaScript
- `npm run dev`: Run TypeScript directly using ts-node

## License

ISC

## Author

Vageshwar 