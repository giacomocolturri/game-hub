import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../entities/Game";
import ms from "ms";

const useGame = (slug: string) => {
  const apiClient = new APIClient<Game>("/games");

  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"), //24hours
  });
};

export default useGame;
