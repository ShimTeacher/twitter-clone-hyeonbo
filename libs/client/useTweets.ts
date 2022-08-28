import { Tweets } from "@prisma/client";
import { useRouter } from "next/router";
import { List } from "postcss/lib/list";
import { useEffect } from "react";
import useSWR from "swr";

interface TweetsResponse {
  ok: boolean;
  tweets: Tweets[];
}

export default function useTweets() {
  const { data, mutate, error } = useSWR<TweetsResponse>(
    typeof window === "undefined" ? null : "/api/tweets"
  );
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/log-in");
    }
  }, [data, router]);
  return { tweets: data?.tweets, isLoading: !data && !error, mutate };
}
