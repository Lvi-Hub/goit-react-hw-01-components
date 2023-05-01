import { SocProfile } from 'components/SocProfile/SocProfile';
import userInfo from 'components/SocProfile/user.json';

export const App = () => {
  return (
    <div>
      <SocProfile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        followers={userInfo.stats.followers}
        views={userInfo.stats.views}
        likes={userInfo.stats.likes}
      />
    </div>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
