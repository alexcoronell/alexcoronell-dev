<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Input from "@components/shared/Input.svelte";

  const { Story } = defineMeta({
    title: "Form/Input",
    component: Input,
    args: {
      name: "email",
      label: "Email",
      placeholder: "email@example.com",
    },
  });
</script>

<Story name="Default" args={{ value: "" }} />
