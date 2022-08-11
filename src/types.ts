import React from 'react';

export type ChildrenType = {
  children: React.ReactNode;
};

export type ListItemImageType = {
  id: string;
  size: number;
  src: string;
  name: string;
};

export type ListItemType = {
  id: string;
  name: string;
  size: number;
  date: number;
  description: string;
  images: ListItemImageType[];
};
