'use client';

import { Tab, Tabs, Card, CardBody, CardHeader } from "@nextui-org/react";

export function Provider({ children }) {
  return (
        <Tab title='Daily forecast'>
            {children}
        </Tab>
  );
}