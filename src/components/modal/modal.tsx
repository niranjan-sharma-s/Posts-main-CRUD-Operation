import { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import "./modal.scss";
import { IPost } from "./../../store/reducers/getUser";
import { addPostAction, editPostAction } from "./../../store/actions/actionCreators";

interface IBasicModal extends IPost {
  isOpen: boolean;
  closeModal: () => void;
  saveModal: () => void;
}

export const BasicModal = (props: IBasicModal) => {
  const { isOpen, closeModal, saveModal } = props;
  const [editedPost, setEditedPost] = useState<IPost>({
    id: props.id,
    title: props.title,
    description: props.description,
  });

  const enableButton = (): boolean => {
    if (!!editedPost.description && !!editedPost.title) {
      if (!hasSameContent(props.title, editedPost?.title) ||
        !hasSameContent(props.description, editedPost?.description)
      ) {
        return false;
      }
    }
    return true;
  };

  const hasSameContent = (title: string | undefined, description: string | undefined) => title === description;

  const handleOnChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setEditedPost({
      ...editedPost,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    enableButton();
  };

  const save = () => {
    editedPost.id ? editPostAction(editedPost) : addPostAction(editedPost)
    saveModal();
  };

  return (
    <Modal open={isOpen} size={"tiny"}>
      <Modal.Header>Edit Fields</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <form className="form">
            <input
              type="text"
              className="inputField"
              value={editedPost.title}
              name="title"
              placeholder="Title"
              onChange={handleOnChange}
            />
            <textarea
              className="inputField"
              value={editedPost.description}
              name="description"
              placeholder="Description"
              onChange={handleOnChange}
            />
          </form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={closeModal}>
          Cancel
        </Button>
        <Button disabled={enableButton()} color="green" onClick={save}>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default BasicModal;
