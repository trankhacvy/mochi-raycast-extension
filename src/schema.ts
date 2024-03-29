export type Ticker = {
  id: string;
  symbol: string;
  name: string;
};

export type Coin = {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  asset_platform_id: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_data: {
    current_price: {
      aed: number;
      ars: number;
      aud: number;
      bch: number;
      bdt: number;
      bhd: number;
      bits: number;
      bmd: number;
      bnb: number;
      brl: number;
      btc: number;
      cad: number;
      chf: number;
      clp: number;
      cny: number;
      czk: number;
      dkk: number;
      dot: number;
      eos: number;
      eth: number;
      eur: number;
      gbp: number;
      hkd: number;
      huf: number;
      idr: number;
      ils: number;
      inr: number;
      jpy: number;
      krw: number;
      kwd: number;
      link: number;
      lkr: number;
      ltc: number;
      mmk: number;
      mxn: number;
      myr: number;
      ngn: number;
      nok: number;
      nzd: number;
      php: number;
      pkr: number;
      pln: number;
      rub: number;
      sar: number;
      sats: number;
      sek: number;
      sgd: number;
      thb: number;
      try: number;
      twd: number;
      uah: number;
      usd: number;
      vef: number;
      vnd: number;
      xag: number;
      xau: number;
      xdr: number;
      xlm: number;
      xrp: number;
      yfi: number;
      zar: number;
    };
    market_cap: {
      aed: number;
      ars: number;
      aud: number;
      bch: number;
      bdt: number;
      bhd: number;
      bits: number;
      bmd: number;
      bnb: number;
      brl: number;
      btc: number;
      cad: number;
      chf: number;
      clp: number;
      cny: number;
      czk: number;
      dkk: number;
      dot: number;
      eos: number;
      eth: number;
      eur: number;
      gbp: number;
      hkd: number;
      huf: number;
      idr: number;
      ils: number;
      inr: number;
      jpy: number;
      krw: number;
      kwd: number;
      link: number;
      lkr: number;
      ltc: number;
      mmk: number;
      mxn: number;
      myr: number;
      ngn: number;
      nok: number;
      nzd: number;
      php: number;
      pkr: number;
      pln: number;
      rub: number;
      sar: number;
      sats: number;
      sek: number;
      sgd: number;
      thb: number;
      try: number;
      twd: number;
      uah: number;
      usd: number;
      vef: number;
      vnd: number;
      xag: number;
      xau: number;
      xdr: number;
      xlm: number;
      xrp: number;
      yfi: number;
      zar: number;
    };
    price_change_percentage_1h_in_currency: {
      aed: number;
      ars: number;
      aud: number;
      bch: number;
      bdt: number;
      bhd: number;
      bits: number;
      bmd: number;
      bnb: number;
      brl: number;
      btc: number;
      cad: number;
      chf: number;
      clp: number;
      cny: number;
      czk: number;
      dkk: number;
      dot: number;
      eos: number;
      eth: number;
      eur: number;
      gbp: number;
      hkd: number;
      huf: number;
      idr: number;
      ils: number;
      inr: number;
      jpy: number;
      krw: number;
      kwd: number;
      link: number;
      lkr: number;
      ltc: number;
      mmk: number;
      mxn: number;
      myr: number;
      ngn: number;
      nok: number;
      nzd: number;
      php: number;
      pkr: number;
      pln: number;
      rub: number;
      sar: number;
      sats: number;
      sek: number;
      sgd: number;
      thb: number;
      try: number;
      twd: number;
      uah: number;
      usd: number;
      vef: number;
      vnd: number;
      xag: number;
      xau: number;
      xdr: number;
      xlm: number;
      xrp: number;
      yfi: number;
      zar: number;
    };
    price_change_percentage_24h_in_currency: {
      aed: number;
      ars: number;
      aud: number;
      bch: number;
      bdt: number;
      bhd: number;
      bits: number;
      bmd: number;
      bnb: number;
      brl: number;
      btc: number;
      cad: number;
      chf: number;
      clp: number;
      cny: number;
      czk: number;
      dkk: number;
      dot: number;
      eos: number;
      eth: number;
      eur: number;
      gbp: number;
      hkd: number;
      huf: number;
      idr: number;
      ils: number;
      inr: number;
      jpy: number;
      krw: number;
      kwd: number;
      link: number;
      lkr: number;
      ltc: number;
      mmk: number;
      mxn: number;
      myr: number;
      ngn: number;
      nok: number;
      nzd: number;
      php: number;
      pkr: number;
      pln: number;
      rub: number;
      sar: number;
      sats: number;
      sek: number;
      sgd: number;
      thb: number;
      try: number;
      twd: number;
      uah: number;
      usd: number;
      vef: number;
      vnd: number;
      xag: number;
      xau: number;
      xdr: number;
      xlm: number;
      xrp: number;
      yfi: number;
      zar: number;
    };
    price_change_percentage_7d_in_currency: {
      aed: number;
      ars: number;
      aud: number;
      bch: number;
      bdt: number;
      bhd: number;
      bits: number;
      bmd: number;
      bnb: number;
      brl: number;
      btc: number;
      cad: number;
      chf: number;
      clp: number;
      cny: number;
      czk: number;
      dkk: number;
      dot: number;
      eos: number;
      eth: number;
      eur: number;
      gbp: number;
      hkd: number;
      huf: number;
      idr: number;
      ils: number;
      inr: number;
      jpy: number;
      krw: number;
      kwd: number;
      link: number;
      lkr: number;
      ltc: number;
      mmk: number;
      mxn: number;
      myr: number;
      ngn: number;
      nok: number;
      nzd: number;
      php: number;
      pkr: number;
      pln: number;
      rub: number;
      sar: number;
      sats: number;
      sek: number;
      sgd: number;
      thb: number;
      try: number;
      twd: number;
      uah: number;
      usd: number;
      vef: number;
      vnd: number;
      xag: number;
      xau: number;
      xdr: number;
      xlm: number;
      xrp: number;
      yfi: number;
      zar: number;
    };
  };
  tickers: Array<{
    base: string;
    target: string;
    last: number;
    coin_id: string;
    target_coin_id: string;
  }>;
  description: {
    en: string;
  };
};

export type NFT = {
  token_id: string;
  collection_address: string;
  name: string;
  description: string;
  image: string;
  image_cdn: string;
  image_content_type: string;
  rarity_rank: number;
  rarity_tier: string;
  attributes: Array<{
    collection_address: string;
    token_id: string;
    trait_type: string;
    value: string;
    count: number;
    rarity: string;
    frequency: string;
  }>;
  rarity: {
    rank: number;
    score: string;
    total: number;
    rarity: string;
  };
  metadata_id: string;
  owner: {
    owner_address: string;
    collection_address: string;
    token_id: string;
  };
  marketplace: Array<any>;
};

export type Collection = {
  tickers: {
    timestamps: Array<number>;
    prices: Array<{
      token: {
        symbol: string;
        is_native: boolean;
        address: string;
        decimals: number;
      };
      amount: string;
    }>;
    times: Array<string>;
  };
  name: string;
  address: string;
  chain: {
    name: string;
    symbol: string;
    chain_id: number;
    is_evm: boolean;
  };
  marketplaces: Array<string>;
  items: number;
  owners: number;
  collection_image: string;
  total_volume: {
    token: {
      symbol: string;
      is_native: boolean;
      address: string;
      decimals: number;
    };
    amount: string;
  };
  floor_price: {
    token: {
      symbol: string;
      is_native: boolean;
      address: string;
      decimals: number;
    };
    amount: string;
  };
  last_sale_price: {
    token: {
      symbol: string;
      is_native: boolean;
      address: string;
      decimals: number;
    };
    amount: string;
  };
  price_change_1d: string;
  price_change_7d: string;
  price_change_30d: string;
};

export type SuggestionNFT = {
  name: string;
  symbol: string;
  address: string;
  chain: string;
  chain_id: number;
};

export type NFTResponse = {
  data: NFT | null;
  suggestions: Array<SuggestionNFT> | null;
  default_symbol: any;
};

export type SearchTickerResponse = {
  data: Ticker[];
};

export type Token = {
  id: number;
  address: string;
  symbol: string;
  chain_id: number;
  decimal: number;
  coin_gecko_id: string;
  name: string;
  is_native: boolean;
  chain: {
    id: number;
    name: string;
    short_name: string;
    coin_gecko_id: string;
    currency: string;
  };
};
