import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const paltformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatforms(paltformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} as="h1" fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
