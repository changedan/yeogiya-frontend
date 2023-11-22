import { PlusIcon } from "@/assets";
import DeleteIcon from "@/assets/images/DeleteIcon";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

const UploadImage = () => {
  const fileInput = useRef(null);
  const [showImages, setShowImages] = useState([]);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const saveImgFile = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  const handleDeleteImage = (deleteImage) => {
    setShowImages(showImages.filter((item) => item !== deleteImage));
  };

  return (
    <>
      <UploadImageLayout>
        {showImages?.map((image, idx) => (
          <ImageStyle>
            <Image>
              <img key={idx} src={image} alt={`${image}-${idx}`} />
              <div
                className="hover_image"
                onClick={() => handleDeleteImage(image)}
              >
                <DeleteIcon />
              </div>
            </Image>
          </ImageStyle>
        ))}
        <UploadImageWrapper>
          {showImages.length < 5 && (
            <>
              <UploadImageStyle onClick={handleButtonClick}>
                <PlusIcon fill={`${theme.color.black35}`} />
                <Input
                  ref={fileInput}
                  multiple
                  type="file"
                  accept="image/*"
                  onChange={saveImgFile}
                />
              </UploadImageStyle>
            </>
          )}
        </UploadImageWrapper>
        <Text>{showImages.length} / 5</Text>
      </UploadImageLayout>
    </>
  );
};
export default UploadImage;

const UploadImageLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 30px;
`;

const UploadImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: fit-content;
  width: 100%;
  color: ${theme.color.black50};
  font-weight: 600;
  font-size: 14px;
  font-family: ${theme.font.number};
`;

const ImageStyle = styled.ul`
  width: 100%;
  max-width: 89px;
  height: calc(100% - 78px);
  position: relative;
  border-radius: 8px;

  :hover {
    width: 100%;
    min-height: 89px;
    cursor: pointer;
    display: block;
  }

  :hover > li {
    background-color: ${theme.color.black50};
  }

  :hover > li > img {
    opacity: 0.8;
  }
`;

const Image = styled.li`
  list-style: none;
  width: 100%;
  height: 100%;
  border-radius: 8px;

  img {
    object-fit: cover;
    width: 100%;
    height: calc(100% - 78px);
    min-height: 89px;
    border-radius: 8px;
  }

  div.hover_image {
    display: none;
  }

  :hover > .hover_image {
    display: inline-block;
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

const UploadImageStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 89px;
  height: 100%;
  min-height: 89px;
  border-radius: 8px;
  border: 1px dashed ${theme.color.black35};
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    display: flex;
    max-width: 27px;
    max-height: 27px;
  }
`;

const Input = styled.input`
  display: none;
`;
