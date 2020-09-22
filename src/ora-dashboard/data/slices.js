/* eslint-disable no-param-reassign,import/prefer-default-export */
import {
  createSlice,
} from '@reduxjs/toolkit';
import {
  RequestStatus,
} from '../../data/constants';

function oraBlocksFromResponse(response) {
  const oraBlocks = {};
  const { blocks } = response;
  const courseBlock = blocks[response.root];

  function iterBlock(block, parentData) {
    if (block.type === 'openassessment') {
      oraBlocks[block.id] = {
        name: block.display_name,
        id: block.id,
        ...parentData,
      };
    } else if (block.children) {
      block.children.forEach((blockId) => {
        iterBlock(blocks[blockId], {
          [block.type]: block.display_name,
          ...parentData,
        });
      });
    }
  }

  iterBlock(courseBlock, {});

  return oraBlocks;
}

const oraSlice = createSlice({
  name: 'ora',
  initialState: {
    status: RequestStatus.IN_PROGRESS,
    blocks: {},
  },
  reducers: {
    fetchOraBlocksRequest: (state) => {
      state.status = RequestStatus.IN_PROGRESS;
    },
    fetchOraBlocksSuccess: (state, { payload }) => {
      state.status = RequestStatus.SUCCESSFUL;
      state.blocks = oraBlocksFromResponse(payload);
    },
    fetchOraBlocksFailed: (state) => {
      state.status = RequestStatus.FAILED;
    },
    fetchOraBlocksDenied: (state) => {
      state.status = RequestStatus.DENIED;
    },
    fetchOraReportRequest: (state, { payload }) => {
      state.blocks[payload.blockId].status = RequestStatus.IN_PROGRESS;
    },
    fetchOraReportSuccess: (state, { payload }) => {
      Object.keys(payload).forEach((blockId) => {
        state.blocks[blockId].status = RequestStatus.SUCCESSFUL;
        Object.assign(state.blocks[blockId], payload[blockId]);
      });
    },
    fetchOraReportFailed: (state, { payload }) => {
      state.blocks[payload.blockId].status = RequestStatus.FAILED;
    },
    fetchOraReportDenied: (state, { payload }) => {
      state.blocks[payload.blockId].status = RequestStatus.DENIED;
    },
  },
});

export const {
  fetchOraBlocksRequest,
  fetchOraBlocksSuccess,
  fetchOraBlocksFailed,
  fetchOraReportFailed,
  fetchOraReportRequest,
  fetchOraReportSuccess,
} = oraSlice.actions;

export const oraReducer = oraSlice.reducer;
