import React, { memo } from 'react'
import cls from 'classnames'

// svg
import { IIconProps } from '~svg'

const Altren: React.FC<IIconProps> = props => {
  const { className, ...rest } = props

  return (
    <svg
      className={cls('fill-none stroke-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={'0 0 151 145'}
      {...rest}
    >
      <path
        d="M90 60C90 67.732 83.732 74 76 74C68.268 74 62 67.732 62 60C62 52.268 68.268 46 76 46C83.732 46 90 52.268 90 60Z"
        strokeWidth="2"
      />
      <path
        d="M90 15C90 22.732 83.732 29 76 29C68.268 29 62 22.732 62 15C62 7.26801 68.268 1 76 1C83.732 1 90 7.26801 90 15Z"
        strokeWidth="2"
      />
      <path d="M76 45.5L76 30" strokeWidth="2" strokeLinecap="square" />
      <path
        d="M130.983 9C121.841 30.4575 100.557 45.5 75.7601 45.5C50.9632 45.5 29.6797 30.4575 20.5369 9"
        strokeWidth="2"
      />
      <path d="M76 90L76 115" strokeWidth="2" strokeLinecap="square" />
      <path d="M129.472 45.383L118 29" strokeWidth="2" />
      <path d="M33.4715 29L22 45.383" strokeWidth="2" />
      <path d="M33.4715 29L22 45.383" strokeWidth="2" />
      <path d="M33.4715 29L22 45.383" strokeWidth="2" />
      <path d="M99.2262 52.0631L95 43" strokeWidth="2" />
      <path d="M56.2262 43L52 52.0631" strokeWidth="2" />
      <path d="M150.213 35.2132L129 14" strokeWidth="2" />
      <path d="M22.2132 14L0.999993 35.2132" strokeWidth="2" />
      <mask
        id="mask0_3_90"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="57"
        y="114"
        width="37"
        height="31"
      >
        <path d="M88.9904 145L76 130L63.0096 145H63L57.5 118.5L74.5 114.5L94 115L88.9904 145Z" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3_90)">
        <path
          d="M62 130C62 122.268 68.268 116 76 116C83.732 116 90 122.268 90 130C90 137.732 83.732 144 76 144C68.268 144 62 137.732 62 130Z"
          strokeWidth="2"
        />
      </g>
      <mask
        id="mask1_3_90"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="75"
        y="67"
        width="31"
        height="37"
      >
        <path d="M105.5 72.0096L90.5 85L105.5 97.9904V98L79 103.5L75 86.5L75.5 67L105.5 72.0096Z" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask1_3_90)">
        <path
          d="M90.5 99C82.768 99 76.5 92.732 76.5 85C76.5 77.268 82.768 71 90.5 71C98.232 71 104.5 77.268 104.5 85C104.5 92.732 98.232 99 90.5 99Z"
          strokeWidth="2"
        />
      </g>
      <mask
        id="mask2_3_90"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="47"
        y="67"
        width="31"
        height="37"
      >
        <path d="M47 72.0096L62 85L47 97.9904V98L73.5 103.5L77.5 86.5L77 67L47 72.0096Z" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask2_3_90)">
        <path
          d="M62 99C69.732 99 76 92.732 76 85C76 77.268 69.732 71 62 71C54.268 71 48 77.268 48 85C48 92.732 54.268 99 62 99Z"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}

export default memo(Altren)
