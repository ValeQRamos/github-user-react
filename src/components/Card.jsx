const card = ({user , repos}) => {
  return (
    <div className="card">
            <div>
              <img src={user.avatar_url} className="avatar" alt={user.name} />
            </div>
            <div className="user-info">
              <h2> {user.name} </h2>
              {user.bio}
              <ul>
                <li>
                  {user.followers} <strong> Followers </strong>
                </li>
                <li>
                  {user.following} <strong> Following </strong>
                </li>
                <li>
                  {user.public_repos} <strong> Repos </strong>
                </li>
              </ul>
              <div>
                {repos.slice(0, 5).map((repo) => {
                  return (
                    <a
                      href={repo.html_url}
                      target="_blank"
                      className="repo"
                      key={repo.id}
                    >
                      {repo.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
  )
}
export default card