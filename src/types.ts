import React from 'react';
import { GetOptionalType } from '~/utils/typeHelpers';
import { API_PATH_NAMES } from '~/data/constants';

export type ChildrenType = {
  children: React.ReactNode;
};

export type ListItemImageType = {
  id: number;
  size: number;
  src: string;
  name: string;
  list_id: number;
};

export type ListItemType = {
  id: number;
  name: string;
  size: number;
  date: string;
  description: string;
  images: ListItemImageType[];
};

export type ApiPathNamesType = GetOptionalType<typeof API_PATH_NAMES>;

export type ListResponseType = {
  data: ListItemType[];
};

export type ListDetailsResponseType = {
  data: ListItemType;
};
