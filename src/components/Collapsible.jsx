import { Accordion } from "@radix-ui/react-accordion";

export default function Collapsible() {
  return (
    <Collapse.Group>
      <Collapse title="SECURITY">
        <Text>
          We know how precious and important your cargo and goods are, and because of this we take care to offer specialist advice on appropriate logistics,freight facilities, near or remote destinations, for yor particular needs. If it's important to you , it's important to use.
        </Text>
      </Collapse>
      <Collapse title="FLEXIBILITY">
        <Text>
         Today's business landscape requires transportation solutions that are both versatile and flexible, and produce the efficiency and cost benefits that satisfy the executive suite. At ASAP Prime Logistics, we blend together the best available asset-based and non asset-based offerings in the logstics and transportation industry.
        </Text>
      </Collapse>
      <Collapse title="INNOVATION">
        <Text>
       Our decades in the industry have been fueled by innovation. As we continually strive to reach a higher standards, our customers reap the rewards. ASAP Prime Logistics pursuit of a more efficient and innovative method of handling logistics means that our customers get the best solutions.
        </Text>
      </Collapse>
    </Collapse.Group>
  );
}