/**
 * RichText Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import RichText from '../src';
const content = `<div style="text-align: left;"><font face="andale mono, times"><strong>测<em>试文本</em></strong><strong>的护具</strong></font></div>
<div style="text-align: left;">&nbsp;</div>
<ul>
<li style="text-align: left;"><font face="andale mono, times"><strong>你好</strong></font></li>
<li style="text-align: left;"><font face="andale mono, times"><strong>测试</strong></font></li>
<li style="text-align: left;"><font face="andale mono, times"><strong>1</strong></font></li>
<li style="text-align: left;"><font face="andale mono, times"><strong>2</strong></font></li>
<li style="text-align: left;"><font face="andale mono, times"><strong>3</strong></font></li>
<li style="text-align: left;"><font face="andale mono, times"><strong>4</strong></font></li>
</ul>
<div>
<table>
<tbody>
<tr>
<td>1</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>4</td>
<td>&nbsp;</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
</tbody>
</table>
</div>`;
class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <RichText content={content}/>
      </div>
    );
  }
}
export default Demo;

// ReactDOM.render(<Demo/>, document.getElementById('RichTextDemo'));
