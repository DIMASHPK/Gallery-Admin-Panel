/* eslint-disable  @typescript-eslint/no-explicit-any */

import { TestContext } from 'yup';

export const filtersLengthChecker = (
  value: string | undefined,
  ctx: TestContext
) => {
  const [
    ,
    {
      value: { filters },
    },
  ] = (ctx as any).from;

  if (filters.length) {
    return Boolean(value?.length);
  }

  return true;
};

export const conditionLengthChecker = (
  value: string | undefined,
  ctx: TestContext
) => {
  const [
    {
      value: { filters },
    },
  ] = (ctx as any).from;

  if (filters.length > 1) {
    return Boolean(value?.length);
  }

  return true;
};

export const sortOrderCheck = (order: string | undefined, ctx: TestContext) => {
  const [
    {
      value: { value },
    },
  ] = (ctx as any).from;

  if (value?.length) {
    return Boolean(order?.length);
  }

  return true;
};

export const valueOrderCheck = (
  value: string | undefined,
  ctx: TestContext
) => {
  const [
    {
      value: { order },
    },
  ] = (ctx as any).from;

  if (order?.length) {
    return Boolean(value?.length);
  }

  return true;
};
