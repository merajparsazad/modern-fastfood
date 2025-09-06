import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <Button>بذار تو اولویت</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
