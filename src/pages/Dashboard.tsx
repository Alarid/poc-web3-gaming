import XIcon from "@heroicons/react/outline/XIcon"
import React from "react"
import JSONPretty from "react-json-pretty"
import Button from "../components/Button"
import { useWeb3Auth } from "../services/web3auth"

export default function Dashboard() {
  const [output, setOutput] = React.useState<string | undefined>()

  const {
    provider,
    login,
    getUserInfo,
    getAccounts,
    getBalance,
    signMessage,
    signTransaction,
    sendTransaction,
    logout,
  } = useWeb3Auth()

  function logOutput(callback: () => Promise<any>) {
    callback().then((output) => setOutput(JSON.stringify(output, null, 4)))
  }

  if (!provider) return null

  return (
    <div className="h-screen bg-dark flex flex-col justify-center items-center">
      <div className="bg-grey p-8 rounded-md border-primary border-2 max-w-md">
        <div className="border-b-secondary border-b-[1px] py-4">
          <h1 className="text-3xl text-primary text-center mb-4">
            POC Web3 Gaming 🕹
          </h1>
          <p className="text-secondary">
            Login to access the marketplace and trade items with other players
          </p>
        </div>
        <nav className="mt-8">
          <ul className="list-none text-primary flex justify-center items-center gap-4 flex-wrap">
            <li>
              <Button onClick={() => logOutput(getUserInfo)} className="card">
                Get User Info
              </Button>
            </li>
            <li>
              <Button onClick={() => logOutput(getAccounts)} className="card">
                Get Accounts
              </Button>
            </li>
            <li>
              <Button onClick={() => logOutput(getBalance)} className="card">
                Get Balance
              </Button>
            </li>
            <li>
              <Button onClick={signMessage} className="card">
                Sign Message
              </Button>
            </li>
            <li>
              <Button onClick={signTransaction} className="card">
                Sign Transaction
              </Button>
            </li>
            <li>
              <Button onClick={sendTransaction} className="card">
                Send Transaction
              </Button>
            </li>
            <li>
              <Button onClick={logout} className="card">
                Log Out
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      {output && (
        <div className="overflow-auto mx-8 mt-8 w-full min-h-[100px] relative">
          <button
            className="absolute top-0 right-8 m-4 p-4"
            onClick={() => setOutput(undefined)}
          >
            <XIcon className=" text-white w-5 h-5" />
          </button>
          <JSONPretty data={output} className="text-white mx-8" />
        </div>
      )}
    </div>
  )
}
