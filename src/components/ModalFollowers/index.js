
export default function ModalFollowers({ close, selectedPost, userInfo, followersInfo }) {



  return (
    <section>
        <div className="modal-followers">
            <div className="modal-followers-backdrop" onClick={close}>
                <div className="modal-follower-inner">
                    <div className="followers-header">
                        <div className="followers-hidden">123</div>
                        <div>
                            <h3>Folowers</h3>
                        </div>
                        <div className="followers-close-button">
                            <span onClick={close}>X</span>
                        </div>
                    </div>
                    <div className="followers-list">
                    {followersInfo.map((follower) => (
                        <div key={follower.login} className="followers-item-wrapper">
                            <div className="followers-item">
                                <div className="followers-left">
                                    <div>
                                        <img src={follower.profilePic}alt={`${follower.login}'s profile`}
                                        className="followers-img"/>
                                    </div>
                                    <div className="followers-list-inner2">
                                        <div>
                                            <h4>{follower.login} ·</h4>
                                            <p> Follow</p>
                                        </div>
                                        <div>
                                            <span>{follower.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="followers-button">
                                    <button>Remove</button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  );
}