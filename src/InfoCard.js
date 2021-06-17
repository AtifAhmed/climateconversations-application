

import { useEffect, useState } from 'react';
import { ReactComponent as IconChevronUp } from 'assets/images/chevron-up.svg';
import { ReactComponent as IconChevronDown } from 'assets/images/chevron-down.svg';
import { Card,  Collapse,Button,CardBody } from 'reactstrap';

const InfoCard = ({heading, children,isTabOpen=false}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    useEffect(()=>{
        setIsOpen(isTabOpen);
    },[])
    return (
      <>
       
        <Button color="primary" className="w-100 " onClick={toggle} title= {`click to see ${heading}`} style={{ marginBottom: '1rem' }}>
             {heading}
            {isOpen && <IconChevronUp/>}
            {!isOpen && <IconChevronDown/>}</Button>
        <Collapse isOpen={isOpen}>
          <Card className="mb-3">
            <CardBody>
            {children}
            </CardBody>
          </Card>
        </Collapse>
      </>
    );
  }

export default InfoCard;
