import { FC, useEffect, useState } from "react";

import { Ticker } from "./components";
import { Layout } from "./components/layout";
import { Error, Spinner } from "./components/common";

const socketBaseUrl = process.env.REACT_APP_BASE_URL as string;

const App: FC = () => {
  const [wsInitialized, setWsInitialized] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);
  const [tickerWs, setTickerWs] = useState<null | WebSocket>(null);
  const [data, setData] = useState<[] | any>([]);

  useEffect(() => {
    const socket: WebSocket = new WebSocket(
      `${socketBaseUrl}/stream?streams=!ticker@arr`
    );

    setTickerWs(socket);

    socket.onmessage = onMessage;
    socket.onopen = onOpen;
    socket.onerror = onError;

    return () => disconnectSocket();
    // eslint-disable-next-line
  }, []);

  const onMessage = (message: any) => {
    const { data: tickerData } = message;
    const parsedTickerData = JSON.parse(tickerData).data;

    setWsInitialized(true);
    setData(parsedTickerData);
  };

  const onOpen = () => setErr(false);

  const onError = () => {
    setWsInitialized(false);
    setErr(true);
  };

  const disconnectSocket = () => {
    if (wsInitialized) {
      tickerWs?.close();
      setWsInitialized(false);
    }
  };

  return (
    <Layout>
      {!wsInitialized ? (
        err ? (
          <Error />
        ) : (
          <Spinner />
        )
      ) : (
        data &&
        data.map((ticker: Ticker) => {
          return <Ticker key={ticker.s} {...ticker} />;
        })
      )}
    </Layout>
  );
};

export default App;
