
export interface ICrypto {
  id: number;
  name: string;
  symbol: string;
  description: string;
  slug: string;
  logo: string;
  num_market_pairs: number;
  date_added: string;
  tags: string[];
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  platform: any;
  cmc_rank: number;
  self_reported_circulating_supply: null;
  last_updated: string;
  quote: any;
  
}
