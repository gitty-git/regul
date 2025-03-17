<script setup lang="ts">
import type { LoginCredentials } from "~/types/auth";

defineProps<{
  credentials: LoginCredentials
  onSubmit: () => void
}>()
</script>

