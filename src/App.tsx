import React from "react"

import { clsx } from "clsx"
import JSONPretty from "react-json-pretty"
import XIcon from "@heroicons/react/outline/XIcon"

import { useWeb3Auth } from "./services/web3auth"
import Dashboard from "./pages/Dashboard"

export default function App() {
  const { provider } = useWeb3Auth()

  return (
    <div className="h-screen bg-dark flex flex-col justify-center items-center">
      {provider ? (
        <Dashboard />
      ) : (
        <div
          className="spinner-border animate-spin inline-block w-16 h-16 border-b-4 rounded-full border-primary"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  )
}
