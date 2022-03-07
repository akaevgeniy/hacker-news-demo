import axios from 'axios';
import { BASE_URL } from './constants';

export const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_URL}/item/${id}.json?print=pretty`);
    return story;
  } catch (error) {
    console.log('Ошибка отображения истории - ', error.status);
  }
};

export const getNewStories = async () => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_URL}/newstories.json?print=pretty`
    );
    const stories = await Promise.all(storyIds.slice(0, 100).map(getStory));
    return stories;
  } catch (error) {
    console.log('Ошибка отображения списка новостей - ', error.status);
  }
};
