import { useMutation, useQuery } from "@tanstack/react-query";
import type { Inquiry } from "../backend.d";
import { useActor } from "./useActor";

export function useGetDestinations() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["destinations"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getDestinations();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTourPackages() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["tourPackages"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTourPackages();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (inquiry: Inquiry) => {
      if (!actor) throw new Error("Not connected");
      return actor.addInquiry(inquiry);
    },
  });
}
