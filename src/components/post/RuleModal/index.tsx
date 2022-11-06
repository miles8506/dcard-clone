import { memo, FC } from 'react'

import { RuleModalWrapper } from './style'

interface IProps {
  closeRuleModal: () => void
}

const RuleModal: FC<IProps> = memo(({ closeRuleModal }) => {
  return (
    <RuleModalWrapper>
      <div className="rule-modal">
        <div className="rule-modal-header">與 Dcard 的發文留言小約定</div>
        <div className="rule-modal-body">
          <div className="rule-list">
            <div className="item">
              <span className="index">一、</span>
              <div className="content">禁止使用不雅字眼、中傷、歧視、挑釁或謾罵他人。</div>
            </div>
            <div className="item">
              <span className="index">二、</span>
              <div className="content">為了創造更佳的內容體驗，Dcard 全面禁止在文章與留言內留下個人聯絡方式或 ID。</div>
            </div>
            <div className="item">
              <span className="index">三、</span>
              <div className="content">請勿短時間內張貼大量重複內容。</div>
            </div>
            <div className="item">
              <span className="index">四、</span>
              <div className="content">除廢文板以外，文章內文字數需多於 15 個繁體中文字。</div>
            </div>
            <div className="item">
              <span className="index">五、</span>
              <div className="content">若文章中有部分內容與事實不符，請適度在標題或內文、留言中標示。未標示並經他人檢舉提出明確證據，且態度不佳者，將斟酌處分，情節嚴重可能永久停權。</div>
            </div>
            <div className="item">
              <span className="index">六、</span>
              <div className="content">若舉辦活動如板聚、明信片交換等，需要使用表單，需徵求到 20 人以上留言「+1」表示願意參加後，方可提供表單連結做報名使用。</div>
            </div>
            <div className="item">
              <span className="index">七、</span>
              <div className="content">請善用「加入話題」為文章分類，讓更多人與你產生共鳴！更多話題的使用方式請點我。</div>
            </div>
            <div className="text">
              其餘規定請參閱
              <span className='link'>板規</span>
              ，若有疑問請私訊粉專。
            </div>
          </div>
        </div>
        <div className="rule-modal-footer">
          <button onClick={closeRuleModal}>我瞭解了</button>
        </div>
      </div>
    </RuleModalWrapper>
  )
})

export default RuleModal
