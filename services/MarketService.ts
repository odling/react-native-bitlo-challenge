import axios from "axios";
import { setMarkets } from "../features/market/marketSlice";
import { store } from "../store/store";

const baseURL = `https://api4.bitlo.com/market`;

export interface IMarket {
  change24h: string;
  change24hPercent: string;
  currentQuote: string;
  highestQuote24h: string;
  lowestQuote24h: string;
  marketCode: string;
  volume24h: string;
  weightedAverage24h: string;
}

export interface IOrder {
  price: string;
  amount: string;
  total: string;
}
export interface IOrderBook {
  asks: IOrder[];
  bids: IOrder[];
}

class MarketService {
  async handleError(error: any) {
    if (error.response) {
      console.log("ERROR RESPONSE DATA: ", error.response.data);
      console.log("ERROR RESPONSE STATUS: ", error.response.status);
    } else if (error.request) {
      console.log("ERROR REQUEST: ", error.request);
    } else {
      console.log("ERROR MESSAGE: ", error.message);
    }
  }

  async getMarkets(): Promise<void> {
    try {
      let resp = await axios.get<IMarket[]>(baseURL + "/ticker/all");
      let markets = resp.data;
      store.dispatch(setMarkets(markets));
    } catch (error: any) {
      this.handleError(error);
    }

    // Note: if the polling strategy was to be used, this way a timer
    // can be set for a specific interval of time.
    // However, we shouldn't forget to clear the timer immediately each
    // time getMarkets function is called.
    // this.timer = setTimeout(() => {
    //   this.getMarkets();
    // }, 15000);
  }

  async getOrderBook(marketCode: string): Promise<IOrderBook | null> {
    try {
      let resp = await axios.get<{
        asks: { "0": string; "1": string }[];
        bids: { "0": string; "1": string }[];
      }>(baseURL + `/orderbook?market=${marketCode}&depth=50`);
      let result = resp.data;
      let orderBookData: IOrderBook = { asks: [], bids: [] };
      orderBookData.asks = result.asks.map((item) => ({
        price: item[0],
        amount: item[1],
        total: (parseFloat(item[0]) * parseFloat(item[1])).toFixed(2),
      }));
      orderBookData.bids = result.bids.map((item) => ({
        price: item[0],
        amount: item[1],
        total: (parseFloat(item[0]) * parseFloat(item[1])).toFixed(2),
      }));
      return orderBookData;
    } catch (e: any) {
      this.handleError(e);
      return null;
    }
  }
}

const marketService = new MarketService();
export default marketService;
