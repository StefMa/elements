<script setup lang="ts">
import {
  DbIcon,
  DbProgress,
  DbTag,
  DbImage,
  DbLink,
  DbChip
} from '@db-ui/v-elements-enterprise/dist/components';
</script>

<template>
  <div>
    <p>DbIcon:</p>
    <DbIcon icon="account" variant="32-outline" />
    <p>DbProgress:</p>
    <DbProgress :value="60" :max="100" />
    <p>DbTag:</p>
    <DbTag>default</DbTag>
    <DbTag variant="informative">informative</DbTag>
    <DbTag variant="success">success</DbTag>
    <p>DbChip:</p>
    <DbChip datatype="filter" icon="account"> default </DbChip>
    <DbChip
      datatype="filter"
      iconafter="account"
      variant="informative"
      disabled
    >
      informative
    </DbChip>
    <DbChip
      datatype="filter"
      icon="account"
      iconafter="account"
      variant="success"
    >
      success
    </DbChip>
    <p>DbImage:</p>
    <DbImage
      alt="DB Image alternative text"
      src="https://db-ui.github.io/core/samples/images/alexander-bagno-iILbjYtkyG0-unsplash.376x253.jpg"
      :width="376"
      :height="253"
    />
    <p>DbLink:</p>
    <DbLink href="https://github.com/db-ui/elements/" target="_blank">
      DB UI Elements components documentation
    </DbLink>
  </div>
</template>
