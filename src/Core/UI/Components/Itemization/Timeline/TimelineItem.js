import React from "react";

import TimelineItemFooter from "./TimelineItemFooter";
import TimelineItemFooterItem from "./TimelineItemFooterItem";

export default class TimelineItem extends React.Component {
  render() {
    const { heading, subheading, tagline, footer } = this.props;

    const showSubheading =
      typeof subheading !== "undefined" && subheading.length > 0;
    const showFooter = typeof footer !== "undefined" && footer.length > 0;

    return (
      <div className="timeline-item">
        <div className="timeline-title mr-3 mr-md-0">
          <p className="tagline-text">{tagline}</p>

          <div className="title-content">
            <h4 className="title-text">{heading}</h4>
            {showSubheading && (
              <div className="timeline-subheading">
                <span>{this.props.subheading}</span>
              </div>
            )}
          </div>
        </div>

        <div className="timeline-content">
          <div className="text-readable-2x mb-0">{this.props.children}</div>
        </div>

        {showFooter && (
          <TimelineItemFooter>
            {footer.map((item, index) => (
              <TimelineItemFooterItem key={index} label={item.label}>
                {item.content}
              </TimelineItemFooterItem>
            ))}
          </TimelineItemFooter>
        )}
      </div>
    );
  }
}
