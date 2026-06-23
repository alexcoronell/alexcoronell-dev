<script lang="ts">
  let {
    name,
    rows,
    label,
    placeholder,
    error = "",
    value = $bindable(""),
    classes = "",
    validator = undefined,
    required = false,
  }: {
    name: string;
    rows: number;
    label: string;
    placeholder: string | null;
    error?: string;
    value?: string;
    classes?: string;
    validator?: (() => any) | undefined;
    required?: boolean;
  } = $props();
</script>

<div class={`form-group ${classes}`.trim()}>
  <label for={name}>{label}</label>
  <textarea
    {name}
    id={name}
    {rows}
    {placeholder}
    bind:value
    onchange={validator}
    oninput={validator}
    onkeyup={validator}
    onblur={validator}
    aria-label={placeholder}
    aria-invalid={error !== ""}
    aria-describedby={`${name}-error`}
    aria-required={required}
  ></textarea>
  <p
    aria-live="polite"
    id={`${name}-error`}
    role="alert"
    aria-hidden={error === "" ? "false" : "true"}
    class="form-group__error"
  >
    {error}
  </p>
</div>
