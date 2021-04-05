import React, { useState, useEffect } from 'react';
import { MenuItem, Popover, Menu, Position, Button } from "@blueprintjs/core";


const Domains = (props) => {

    console.log('in Domain component')
    console.log('propsdomains:', props.domainsProps)
    console.log('propsurl:', props.urlsProps)

    return (
        <div>
            {props.domainsProps && props.domainsProps.map((m) => {
                console.log('m', m)
                console.log(props.urlsProps[m])
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