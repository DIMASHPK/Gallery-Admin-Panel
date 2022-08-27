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
  isEnd: boolean;
};

export type ListDetailsResponseType = {
  itemData: ListItemType;
  hasPrevious: boolean;
  hasNext: boolean;
};

export type PhotoFullViewImageType = {
  src: string;
};

export type PhotoFullViewType = {
  images: PhotoFullViewImageType[];
  isOpen: boolean;
  photoIndex: number;
};

export type ToolsSortingFormType = {
  order: string;
  value: string;
};

export type ToolsFiltersFormType = {
  name: string;
  value: string;
};

export type ToolsFormCommonType = {
  sorting: ToolsSortingFormType;
  filters: ToolsFiltersFormType[];
};

export type ToolsFormType = {
  changeableValues: ToolsFormCommonType;
  currentValues: ToolsFormCommonType;
};

export type SelectOptionType = {
  label: string;
  value: string;
};
