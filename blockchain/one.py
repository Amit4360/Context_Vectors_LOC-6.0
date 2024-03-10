from web3 import Web3
# infura_url = 'https://mainnet.infura.io/v3/f421bdbf7d5a41dfbdc42d20cb39ea1d'
# web3 = Web3(Web3.HTTPProvider(infura_url))
# print(web3.is_connected())

ganache_url = "http://127.0.0.1:7545"

web3 = Web3(Web3.HTTPProvider(ganache_url))
account_1 = "0xFdd17180283066D605877D5a4796963cea6AfFC6"
account_2 = "0x6E15BA5BcbC1717905EEAa9b2cA3f8EF6EFf33C9"

private_key1 = "0xb2b11468776bace6d2035c87b9d649c3435978f07df31d8fd0e5b17b5d1a022d"

#get the nonce
nonce = web3.eth.get_transaction_count(account_1)
#build a transaction
tx = {
    'nonce':nonce,
    'to':account_2,
    'value':web3.to_wei(1,'ether'),
    'gas':2000000,
    'gasPrice':web3.to_wei('50','gwei')
}

#signed the transaction
signed_tx = web3.eth.account.sign_transaction(tx,private_key1)
tx_hash = web3.eth.send_raw_transaction(signed_tx.rawTransaction)
print(web3.to_hex(tx_hash))
