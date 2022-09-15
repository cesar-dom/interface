import { useApi } from "hooks/useApi";
import integrationsApi from "services/api/integrationsApi";
import Integration from "types/entities/Integration";

function useIntegration(integrationId: number | string | null | undefined) {
  if (!integrationId)
    return {
      integration: {} as Integration,
      isLoading: true,
      refetch: () => {},
    };

  const {
    data: integration,
    isLoading,
    refetch,
  } = useApi<Integration>({
    key: "integration",
    fetchMethod: () => integrationsApi.getIntegration(integrationId),
    options: {
      enabled: !!integrationId,
    },
  });

  localStorage.setItem("integrationName", integration?.name ?? "false");

  // eslint-disable-next-line no-console
  console.log("useintegration");

  return { integration, isLoading, refetch };
}

export default useIntegration;
