<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Loading from "@components/ui/icons/Loading.svelte";
  import SuccessIcon from "@components/ui/icons/SuccessIcon.svelte";
  import ErrorIcon from "@components/ui/icons/ErrorIcon.svelte";

  const { Story } = defineMeta({
    title: "Icons",
    component: Loading,
    args: {
      size: "w-6 h-6",
    },
  });
</script>

{#snippet loading(args: Record<string, unknown>)}
  <Loading size={args.size as string} />
{/snippet}

{#snippet success(args: Record<string, unknown>)}
  <SuccessIcon size={args.size as string} />
{/snippet}

{#snippet error(args: Record<string, unknown>)}
  <ErrorIcon size={args.size as string} />
{/snippet}

<Story name="Loading" template={loading} />
<Story name="Success" template={success} />
<Story name="Error" template={error} />

<Story
  name="LoadingCustomSize"
  args={{ size: "w-12 h-12" }}
  template={loading}
/>
