## okp4d query ibc-fee total-recv-fees

Query the total receive fees for a packet

### Synopsis

Query the total receive fees for a packet

```
okp4d query ibc-fee total-recv-fees [port-id] [channel-id] [sequence] [flags]
```

### Examples

```
okp4d query ibc-fee total-recv-fees transfer channel-5 100
```

### Options

```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for total-recv-fees
      --node string     &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string   Output format (text|json) (default "text")
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID (default "okp4d")
```

### SEE ALSO

* [okp4d query ibc-fee](okp4d_query_ibc-fee.md)	 - IBC relayer incentivization query subcommands

