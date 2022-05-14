import type * as CommonDTO from '../common.dto';

type PostResponseDTO = {
  id: number;
  title: string;
  postImg: string;
  createdDt: string;
  updatedDt: string;
  writer: CommonDTO.AccountInfo;
  content: string;
  jobs: Array<CommonDTO.JobInfo>;
  applicants: Array<CommonDTO.AccountInfo>;
  recruiting: boolean;
};

export type GetPostsResponse = Array<PostResponseDTO>;

export type GetPostResponse = PostResponseDTO;

export type DeletePostResponse = CommonDTO.ResponseDTO;
