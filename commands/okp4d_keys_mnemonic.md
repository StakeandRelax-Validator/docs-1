## okp4d keys mnemonic

Compute the bip39 mnemonic for some input entropy

### Synopsis

Create a bip39 mnemonic, sometimes called a seed phrase, by reading from the system entropy. To pass your own entropy, use --unsafe-entropy

```
okp4d keys mnemonic [flags]
```

### Options

```
  -h, --help             help for mnemonic
      --unsafe-entropy   Prompt the user to supply their own entropy, instead of relying on the system
```

### Options inherited from parent commands

```
      --home string              The application home directory (default "/home/john/.okp4d")
      --keyring-backend string   Select keyring's backend (os|file|test) (default "test")
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --output string            Output format (text|json) (default "text")
```

### SEE ALSO

* [okp4d keys](okp4d_keys.md)	 - Manage your application's keys

