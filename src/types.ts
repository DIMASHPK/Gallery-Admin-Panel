import React from 'react';

export type ChildrenType = {
  children: React.ReactNode;
};

export type ListItem = {
  id: string;
  name: string;
  size: number;
  date: number;
  description: string;
  images: { id: string; size: number; src: string; name: string }[];
};
