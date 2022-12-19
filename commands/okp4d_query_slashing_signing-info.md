## okp4d query slashing signing-info

Query a validator's signing information

### Synopsis

Use a validators' consensus public key to find the signing-info for that validator:

$ okp4d query slashing signing-info '{"@type":"/cosmos.crypto.ed25519.PubKey","key":"OauFcTKbN5Lx3fJL689cikXBqe+hcp6Y+x0rYUdR9Jk="}'

```
okp4d query slashing signing-info [validator-conspub] [flags]
```

### Options

```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for signing-info
      --node string     &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string   Output format (text|json) (default "text")
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID (default "okp4d")
```

### SEE ALSO

* [okp4d query slashing](okp4d_query_slashing.md)	 - Querying commands for the slashing module

