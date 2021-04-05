import React, { useState, useEffect } from 'react';
import { MenuItem, Popover, Menu, Position, Button } from "@blueprintjs/core";


const Domains = (props) => {

    return (
        <div>
            {props.domainsProps && props.domainsProps.map((m) => {

                return (
                <Popover
                  content={
                    <Menu>
                      {
                        props.urlsProps && props.urlsProps[m] && props.urlsProps[m].map((u) => <MenuItem text={u} />)
                      }
                    </Menu>
                  } 
                  position={Position.BOTTOM}>
                  <Button icon="link" text={m} />
                </Popover>
                )
            })}
        </div>
    );
};
   
export default Domains;