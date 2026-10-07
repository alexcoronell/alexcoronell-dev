<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import TextArea from "@components/shared/TextArea.svelte";

  const { Story } = defineMeta({
    title: "Form/TextArea",
    component: TextArea,
    args: {
      name: "message",
      rows: 6,
      label: "Message",
      placeholder: "Write your message here",
    },
  });
</script>

<Story name="Default" />

<Story name="WithError" args={{ error: "This field is required" }} />
