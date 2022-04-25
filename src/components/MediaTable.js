// import PropTypes from 'prop-types';
import MediaRow from './MediaRow';
import {useMedia} from '../hooks/ApiHooks';

const MediaTable = () => {
  const {mediaArray} = useMedia();
  return (
    <table>
      <tbody>
        {mediaArray.map((item, index) => {
          return <MediaRow key={index} file={item} />;
        })}
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {};

export default MediaTable;
