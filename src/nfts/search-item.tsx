import { Icon, List, ActionPanel, Action } from "@raycast/api";
import SearchItemNFTDetail from "./search-item-detail";
import { SuggestionNFT } from "../schema";
import { getAvatarIcon } from "@raycast/utils";

type SearchNftItemProps = SuggestionNFT;

export default function SearchNftItem({ name, symbol, address }: SearchNftItemProps) {
  return (
    <List.Item
      key={address}
      icon={getAvatarIcon(symbol)}
      title={name}
      accessories={[
        {
          text: { value: symbol.toUpperCase() },
        },
      ]}
      detail={address ? <SearchItemNFTDetail address={address} /> : null}
      actions={
        <ActionPanel>
          <Action.OpenInBrowser
            title="Open in CoinMarketCap"
            icon={Icon.Globe}
            url={`https://coinmarketcap.com/currencies/${symbol}`}
          />
          <Action
            title="Add to Favorites"
            icon={Icon.Star}
            shortcut={{ modifiers: ["cmd", "shift"], key: "f" }}
            onAction={() => alert("hihi")}
          />
        </ActionPanel>
      }
    />
  );
}
