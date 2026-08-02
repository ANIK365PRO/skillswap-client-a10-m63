"use client";

import { useState } from "react";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

import { Link2 } from "lucide-react";

import { submitDeliverable } from "@/lib/actions/task";
import { useRouter } from "next/navigation";


const DeliverableModal = ({ project }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!url.trim()) {
      alert("Please enter deliverable URL");
      return;
    }

    setLoading(true);


    const result = await submitDeliverable(project._id, {
      deliverableUrl: url,
    });

    console.log("result", result)

    setLoading(false);

    if (result.success) {
    //   window.location.reload();

        setUrl("");
        onOpenChange(false);
        router.refresh();

    } else {
      alert(result.message);
    }
  };

  return (
    <Modal>
      {/* Trigger */}
      <Button
        size="sm"
        className="bg-primary text-white"
      >
        Submit Deliverable
      </Button>

      <Modal.Backdrop variant="blur">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">

            <Modal.CloseTrigger />

            <Modal.Header>

              <Modal.Icon className="bg-primary/10 text-primary">
                <Link2 size={20} />
              </Modal.Icon>

              <Modal.Heading>
                Submit Deliverable
              </Modal.Heading>

              <p className="mt-2 text-sm text-muted">
                Submit your final work link.
              </p>

            </Modal.Header>

            <Modal.Body className="p-6">

              <Surface>

                <div className="space-y-5">

                  <div>

                    <h3 className="font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted">
                      {project.clientName}
                    </p>

                  </div>

                  <TextField
                    className="w-full"
                    variant="secondary"
                  >

                    <Label>
                      Deliverable URL
                    </Label>

                    <Input
                      placeholder="https://github.com/username/project"
                      value={url}
                      onChange={(e) =>
                        setUrl(e.target.value)
                      }
                    />

                  </TextField>

                </div>

              </Surface>

            </Modal.Body>

            <Modal.Footer>

              <Button
                slot="close"
                variant="secondary"
              >
                Cancel
              </Button>

              <Button
                loading={loading}
                onPress={handleSubmit}
              >
                Submit
              </Button>

            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DeliverableModal;