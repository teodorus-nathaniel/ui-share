import React, { useEffect } from 'react';
import './detail-page.styles.scss';
import { match } from 'react-router-dom';
import { PostDetail } from '../../@types/post.interfaces';
import { GlobalState } from '../../redux/root-reducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchPostDetail } from '../../redux/post-detail/post-detail.actions';
import moment from 'moment';
import LikeDislike from '../../components/like-dislike/like-dislike.component';

interface IProps {
  post: PostDetail | null;
  match: match<{ id: string }>;
  fetchPostDetail: (id: string) => void;
}

function DetailPagePlain ({ post, fetchPostDetail, match }: IProps){
  useEffect(
    () => {
      fetchPostDetail(match.params.id);
    },
    [ fetchPostDetail, match ]
  );

  if (!post) return null;

  const {
    id,
    title,
    owner,
    img,
    likeCount,
    dislikeCount,
    commentsCount,
    liked,
    disliked,
    timestamp,
    description,
    link
  } = post;

  // TODO: comments nya bkin ada id nya, supaya nanti kalo comment icon yang di home dipencet, dia sesuai hash pindah ke comments (#comments)
  return (
    <div className='detail-page'>
      <div className='detail-page__content-container scrollbar'>
        <img src={img} alt='page' />
      </div>
      <div className='detail-page__description-container'>
        <div className='detail-page__description-container-1'>
          <span className='detail-page__description-container-1__title'>
            {title}
          </span>
          <span className='detail-page__description-container-1__timestamp'>
            {moment(timestamp).format('DD MMM YYYY')}
          </span>
        </div>
        <div className='detail-page__description-container-2'>
          <LikeDislike
            className='detail-page__description-container-2__like-dislike'
            dislikeCount={dislikeCount}
            likeCount={likeCount}
            liked={liked}
            disliked={disliked}
            size={1.5}
            id={id}
          />
        </div>
      </div>
      <hr className='hr' />
      <div className='detail-page__owner'>
        <div className='detail-page__owner__info'>
          <img
            className='detail-page__owner__info__profile-pic'
            src={owner.profilePic}
            alt='Avatar'
          />
          <span className='detail-page__owner__info__username'>
            {owner.username}
          </span>
        </div>
        <div className='detail-page__owner__link'>
          <a className='detail-page__owner__link__website' href={link}>
            Visit Link
          </a>
        </div>
      </div>
      <div className='detail-page__description'>{description}</div>
      <hr className='hr' />
      <div className='detail-page__commentar'>
        <div>
          <span>{commentsCount} Commentar</span>
        </div>
        <div className='detail-page__commentar__sort-container'>
          <span>Sort by: </span>
          <select>
            <option value='date'>Date</option>
            <option value='like'>Most Liked</option>
          </select>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: GlobalState) => ({
  post: state.postDetail.postDetail
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPostDetail: (id: string) => {
    dispatch(fetchPostDetail(id));
  }
});

const DetailPage = connect(mapStateToProps, mapDispatchToProps)(
  DetailPagePlain
);

export default DetailPage;
