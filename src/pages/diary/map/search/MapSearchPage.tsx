import Layout from "@/components/@common/Layout";
import LocationSearch from "./components/LocationSearch";
import LocationList from "./components/LocationList";
import useSearch from "@/features/hooks/useSearch";
import { KeyboardEvent, useState } from "react";
import theme from "@/styles/theme";

const MapSearchPage = () => {
  const [isSearch, setSearch] = useState<boolean>(false);

  const { value, inputRef, onChange, onReset } = useSearch();

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return setSearch(false);
    if (e.key === "Enter") {
      e.preventDefault();
      setSearch(true);
    }
  };

  return (
    <Layout
      maxWidth="var(--max-width)"
      paddingTop="0"
      paddingBottom="0"
      backgroundColor={theme.color.white15}
      css={{ backgroundColor: `${theme.color.white}` }}
    >
      <LocationSearch
        value={value}
        inputRef={inputRef}
        onChange={onChange}
        onReset={onReset}
        onKeyDown={handleEnter}
      />
      <LocationList keyword={isSearch ? value : null} />
    </Layout>
  );
};

export default MapSearchPage;
