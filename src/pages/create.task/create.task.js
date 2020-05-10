import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import { CommonInput } from "../../components/reuseable.components/input/input";
import { CommonButton } from "../../components/reuseable.components/button/button";
import { createTask } from "../../services/task/task";
import { useDispatch, useSelector, batch } from "react-redux";
import { setTasks } from "../../store/actions/task";
import {
  InputWrapper,
  Wrapper,
  PriorityWrapper,
  PriorityTag,
  UploadImageWrapper,
  ImageWrapper,
} from "./create.task.styled";
import { CommonText } from "../../components/reuseable.components/text/text";
import { uploadImageToCloudinary } from "../../util/cloudinary";

const priorities = ["HIGH", "MID", "LOW"];

export function CreateTask({ history }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const imageInputRef = useRef(null);

  const tasks = useSelector(({ taskReducer }) => taskReducer.tasks);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setTasks());
  }, []);

  function handleCreateTask() {
    const { files } = document.querySelector('input[type="file"]');
    uploadImageToCloudinary(files[0])
      .then((res) => res.json())
      .then((res) => {
        const task = {
          title: taskName,
          description: taskDescription,
          priority: taskPriority,
          imageUrl: res.secure_url,
          creator: {
            name: "",
          },
        };
        createTask(task);
        initialStateValues();
        dispatch(setTasks([...tasks, task]));
      })
      .catch((err) => console.log(err));
  }

  function initialStateValues() {
    batch(() => {
      setTaskDescription("");
      setTaskName("");
    });
  }

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  }

  function handleOnChangeInput() {
    imageInputRef.current.click();
  }

  function handlePriorityColor(priority) {
    switch (priority) {
      case "HIGH":
        return "linear-gradient(74deg, rgba(255,53,53,1) 0%, rgba(212,43,43,0.7693452380952381) 37%, rgba(186,3,134,1) 100%);";
      case "MID":
        return "linear-gradient(74deg, rgba(1,156,23,1) 0%, rgba(43,212,101,0.7693452380952381) 37%, rgba(46,214,95,1) 100%);";
      case "LOW":
        return "linear-gradient(74deg, rgba(53,191,255,1) 0%, rgba(43,161,212,0.7693452380952381) 37%, rgba(46,65,214,1) 100%);";
      default:
        break;
    }
  }

  function renderPriorities() {
    return priorities.map((item, index) => (
      <PriorityTag
        key={index}
        bgColor={() => handlePriorityColor(item)}
        onClick={() => setTaskPriority(item)}
        selected={taskPriority === item}
      >
        <CommonText value={`${item} priority`} color={"#fff"} />
      </PriorityTag>
    ));
  }

  return (
    <Wrapper>
      <InputWrapper>
        <CommonInput
          placeholder={"Task name"}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <CommonInput
          placeholder={"Task description"}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </InputWrapper>
      <PriorityWrapper>{renderPriorities()}</PriorityWrapper>

      <ImageWrapper>
        {imageUrl ? (
          <img id="target" src={imageUrl} width={"100%"} height={"400px"} />
        ) : (
          <UploadImageWrapper onClick={handleOnChangeInput}>
            <CommonText value={"Image upload"} color={"#fff"} />
          </UploadImageWrapper>
        )}
      </ImageWrapper>
      <CommonButton title={"Create Task"} onClick={() => handleCreateTask()} />
      <input
        type="file"
        ref={imageInputRef}
        onChange={onImageChange}
        style={{ opacity: 0 }}
      />
    </Wrapper>
  );
}
